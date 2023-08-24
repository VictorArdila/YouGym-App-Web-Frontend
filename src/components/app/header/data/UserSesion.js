const user = JSON.parse(sessionStorage.getItem('user'))|| [
    {
      img: "",
      name: "",
      to: "#",
      subNav: [
        {
          rol: "",
          path: "#",
        },
        {
          email: "",
          path: "#",
        },
        {
          sesion: "",
          path: "#",
        },
      ],
    },
  ];
  export const profile = 
    {
      img: user.imageUrl,
      name: user.name,
      to: "#",
      subNav: [
        {
          rol: "user.rol",
          path: "#",
        },
        {
          email: user.email,
          path: "#",
        },
        {
          sesion: "user.TipoSesion",
          path: "#",
        },
      ],
    }