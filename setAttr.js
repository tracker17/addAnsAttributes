let links = [
  "https://support.microsoft.com/en-us/office/accounts-and-storage-for-onedrive-40f05dd5-fa70-4c58-a1fc-47a02fd1d7d8",
  "https://support.microsoft.com/en-us/topic/83ab0d8a-8400-45b0-8dcf-dc8aa8a6bcf8",
  "https://support.microsoft.com/en-us/office/fix-onedrive-sync-problems-on-a-mac-af3012d7-13ec-4ac9-bbb1-ebcd2a0cd756",
  "https://support.microsoft.com/en-us/office/onedrive-is-stuck-on-processing-changes-b386b813-9b66-4e47-8c4c-2b45533edccd",
  "https://support.microsoft.com/en-us/office/onedrive-is-stuck-on-sync-pending-4aad2094-7cf2-4b04-9451-10f16144376c",
  "https://support.microsoft.com/en-us/office/how-to-cancel-or-stop-sync-in-onedrive-4885c27e-3d89-4d69-be75-2646c71367d3",
];

var raw = JSON.stringify({
  document_group_id: 2617,
  api_server: "https://m0.avaamo.com",
  document: {
    preview_url:
      "https://support.microsoft.com/en-us/office/accounts-and-storage-for-onedrive-40f05dd5-fa70-4c58-a1fc-47a02fd1d7d8",
    attributes: {
      type: {
        value: "OneDrive",
        priority: 0,
      },
      device: {
        value: "MAC",
        priority: 1,
      },
      View_More: {
        value: "No",
        priority: 2,
      },
    },
  },
});

const updateAttributes = async () => {
  let url = "https://answers-ingest.aiavaamo.com/api/document";
  let args = {
      method: "PUT",
      headers: {
        "Access-Token": "e4959e4bdb5f46f4b4351049c2b2883b",
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    },
    jsonResponse = await fetch(url, args)
      .then((res) => {
        // console.log("\n updateAttributes res :",res)
        console.log("\n GetLinks res.status :", res.status);
        if (res.status == 200) {
          return res.json();
        } else return "failed";
      })
      .then((json) => {
        // console.log("\n updateAttributes Response : \n", json);
        return json;
      })
      .catch((err) => {
        console.log("\nError", err);
        return "failed";
      });
  return jsonResponse;
};
