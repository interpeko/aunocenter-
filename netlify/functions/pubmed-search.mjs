const json=(statusCode,body)=>({statusCode,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'public, max-age=300','X-Content-Type-Options':'nosniff'},body:JSON.stringify(body)});
export async function handler(event){
  if(event.httpMethod!=='GET') return json(405,{error:'Method not allowed'});
  const query=(event.queryStringParameters?.q||'').trim();
  const limit=Math.min(Math.max(Number(event.queryStringParameters?.limit)||10,1),20);
  if(query.length<2||query.length>300) return json(400,{error:'Enter a query between 2 and 300 characters.'});
  try{
    const common='tool=AUNO_Center&email=aunocenter%40gmail.com';
    const searchUrl=`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&sort=relevance&retmax=${limit}&term=${encodeURIComponent(query)}&${common}`;
    const searchResponse=await fetch(searchUrl,{headers:{Accept:'application/json','User-Agent':'AUNO-Center-PubMed-Interface/1.0'}});
    if(!searchResponse.ok) throw new Error('NCBI search unavailable');
    const search=await searchResponse.json();const ids=search.esearchresult?.idlist||[];
    if(!ids.length) return json(200,{count:Number(search.esearchresult?.count||0),results:[],source:'NCBI PubMed'});
    const summaryUrl=`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=${ids.join(',')}&${common}`;
    const summaryResponse=await fetch(summaryUrl,{headers:{Accept:'application/json','User-Agent':'AUNO-Center-PubMed-Interface/1.0'}});
    if(!summaryResponse.ok) throw new Error('NCBI summary unavailable');
    const summary=await summaryResponse.json();
    const results=ids.map(id=>summary.result?.[id]).filter(Boolean).map(item=>({pmid:String(item.uid),title:String(item.title||'Untitled record'),authors:(item.authors||[]).map(author=>String(author.name)).slice(0,8),journal:String(item.fulljournalname||item.source||''),date:String(item.pubdate||''),doi:String((item.articleids||[]).find(value=>value.idtype==='doi')?.value||''),url:`https://pubmed.ncbi.nlm.nih.gov/${item.uid}/`}));
    return json(200,{count:Number(search.esearchresult?.count||0),results,source:'NCBI PubMed'});
  }catch(error){return json(502,{error:'The official PubMed service could not be reached. Please try again or search directly on PubMed.'});}
}
