exports.results_with_links = (woods) => {
    const woodsWithLinks = woods.map((wood) => {
      return {
        ...wood.toJSON(),
        links: [
          {
            rel: "self",
            method: "GET",
            href: `/api/woods/${wood.id}`,
          },
          {
            rel: "update",
            method: "PUT",
            href: `/api/woods/${wood.id}`,
          },
          {
            rel: "delete",
            method: "DELETE",
            href: `/api/woods/${wood.id}`,
          },
        ],
      };
    });
  
    const links = [
      {
        rel: "all",
        method: "GET",
        href: "/api/woods",
      },
      {
        rel: "by hardness",
        method: "GET",
        href: "/api/woods/:hardness",
      },
      {
        rel: "create",
        method: "POST",
        href: "/api/woods",
      },
    ];
    return { woodsWithLinks, links };
  }
  