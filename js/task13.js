const Time=(date)=>{
    const start=Date.now();
    date();
    console.log(`${Date.now() - start }ms`);
}
Time(()=>{
    for (let i=0; i< 1e6;i++){}
});