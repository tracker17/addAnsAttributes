let instance = "https://m0.avaamo.com";
let group_id = 2617;
let access_token = "e4959e4bdb5f46f4b4351049c2b2883b";

const GetLinks = async () => {
  let url = `${instance}/answers/external/document_groups/${group_id}/documents`;
  let args = {
      method: "GET",
      headers: {
        "Access-Token": access_token,
      },
    },
    jsonResponse = await fetch(url, args)
      .then((res) => {
        // console.log("\nGetGithubFile res :",res)
        console.log("\n GetLinks res.status :", res.status);
        if (res.status == 200) {
          return res.json();
        } else return "failed";
      })
      .then((json) => {
        // console.log("\n GetLinks Response : \n", json);
        return json;
      })
      .catch((err) => {
        console.log("\nError", err);
        return "failed";
      });
  return jsonResponse;
};

async function main() {
  var links_data = await GetLinks();
  console.log(`there are ${links_data.count} documents in this group`);
  if (links_data.next == null) {
    let links = [];
    links_data.results.forEach((element) => {
      links.push(element.source_url);
    });
    console.log(links);
  } else {
    console.log("\n There are more links to be getched");
  }
}

main();
