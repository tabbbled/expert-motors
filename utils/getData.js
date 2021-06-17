const Airtable = require('airtable');

const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);


const main = base("tbl2CJ65eAucEBj9e");
const services = base("tblo3wjd4U9qMD9iH");
const leads = base("tbleewAvUxQ9z5C0I");


// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = records => {
    return records.map(record => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = record => {
    return {
        id: record.id,
        fields: record.fields,
    };
};

// export default async function getData(page) {
//     // get data for specific page
//     const pages = await tablePages.select({
//         filterByFormula: `{PageName} = "${page}"`
//     }).all();

//     //get list of pages for static paths
//     const allPages = await tablePages.select({
//         fields: ["PageName"]
//     }).all();

//     const minifiedAllPages = await getMinifiedRecords(allPages);

//     const returnPages = [];
//     minifiedAllPages.forEach(page => {
//         returnPages.push(page.fields.PageName)
//     })

//     const minifiedPages = await getMinifiedRecords(pages);


//     return { allPages: returnPages, page: minifiedPages[0] };
// }

export default async function getMain() {



    //get list of pages for static paths
    const allData = await main.select({}).all();

    const minified = await getMinifiedRecords(allData);

    return minified[0].fields
}

export async function getServices(id) {

    //get list of pages for static paths
    const allData = !id ? await services.select({}).all() : await services.select({
        filterByFormula: `{id} = "${id}"`
    }).all();

    const minified = await getMinifiedRecords(allData);

    return id ? minified[0].fields : minified
}

export async function sendLead(data) {

    return await leads.create([
        {
            "fields": {
                "name": data.name,
                "phone": data.phone,
                "auto": data.auto,
                "comments": data.comments,
                "service": data.service
            }
        }], function (err) {
            if (err) {
                console.error(err);
                return;
            }
        });
}

