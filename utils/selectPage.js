export default async () => {
  const projectsCards = await import("~/models/projectsCards.js");
  const experiencesCards = await import("~/models/experiencesCards.js");
  const store = await import("~/store");
  const all = [...projectsCards.default, ...experiencesCards.default];
  const visited = store.state().visited;
  let result = all[0];
  if (all.length === visited.length) store.mutation.resetVisitedPage();
  all.forEach((el) => {
    if (!visited.includes(el.title)) {
      if (el.priority > result.priority) {
        result = el;
      }
    }
  });
  return result.title;
};
