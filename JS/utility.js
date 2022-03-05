const stringifyData=(date) =>{
    const options={day:'numeric',month:'short',year:'numeric'}
    const newData=!data ?"undefined":
    new Date(Date.parse(date)).toLocaleDateString('en-GB',options);
    return newData;
}