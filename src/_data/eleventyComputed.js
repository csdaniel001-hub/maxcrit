export default {
  pre: (data) => {
    const url = (data.page && data.page.url) || "/";
    const depth = typeof url === "string" ? url.split("/").length - 2 : 0;
    return depth > 0 ? "../".repeat(depth) : "";
  },
};
