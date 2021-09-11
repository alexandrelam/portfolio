export default async (visited, resetVisitedPage) => {
  const projectsCards = await import("~/models/projectsCards.js");
  const experiencesCards = await import("~/models/experiencesCards.js");

  const all = [...projectsCards.default, ...experiencesCards.default];
  let result = all[all.length - 1];
  if (all.length === visited.length) resetVisitedPage();
  all.forEach((el) => {
    if (!visited.includes(el.title.replace(/\s/g, ""))) {
      if (el.priority >= result.priority) {
        result = el;
      }
    }
  });
  return { title: result.title, url: result.title.replace(/\s/g, "") };
};
