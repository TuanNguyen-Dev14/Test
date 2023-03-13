import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser(
    "https://testops.qa.katalon.com/welcome?redirect=%252F%253F"
  );
  await web.click({
    type: "Web",
    id: "11b294bc-6e48-4a5e-b60d-42f340daf1f2",
    attributes: {
      title: "Dev Project",
      class: "project-header",
      "data-traffic-agent-last-action-id":
        "0874a596-77a6-41ff-92a8-19c67108d872",
      "data-rnd-last-action-id": "266523b7-70fc-45ea-bf95-55ac25c6f62b",
    },
    childIndex: 1,
    hashes: { "md5.v1": "2c3801c3d8e3679b8c650d65177e1521" },
    name: "div - DPDev Project",
    selectors: [
      {
        id: "fba59d1d-5fb3-4e84-bbd9-54b3bb7dd875",
        type: "CSS",
        value: ".project-header",
        isDefault: true,
      },
      {
        id: "e2c1757c-583c-4283-9915-df5d83de1c7f",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "div",
    text: "DPDev Project",
    pageUrl: "https://testops.qa.katalon.com/organization/90/home",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});