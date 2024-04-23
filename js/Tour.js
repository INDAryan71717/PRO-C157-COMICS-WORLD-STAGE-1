AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "naruto",
        title: "Naruto",
        url: "./assets/thumbnails/naruto1.jpg",
      },
      {
        id: "demon-slayer",
        title: "DemonSlayer",
        url: "./assets/thumbnails/demonslayer.jpg",
      },

      {
        id: "onepiece",
        title: "OnePiece",
        url: "./assets/thumbnails/onepiece.jpg",
      },
      {
        id: "death-note",
        title: "DeathNote",
        url: "./assets/thumbnails/deathnote.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id)
      
      
      // Thumbnail Element
      const thumbNail = this.createThumbnail(item)
      borderEl.appendChild(thumbNail);
     
      // Title Text Element
      const titleEl = this.createTitleEl(position,item)
      borderEl.appendChild(titleEl)
      
      this.placesContainer.appendChild(borderEl);
    }
  },

  createBorder: function(position,id) {
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10
    });
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("material", {
      color:"red",
      opacity:1
    })
    return entityEl

  },
  createThumbnail: function(item) {
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {
      primitive:"circle",
      radius:9
    });
    entityEl.setAttribute("material", {
      src:item.url
    })
    return entityEl
  },
  createTitleEl: function(position,item) {
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("text", {
      font:"exo2bold",
      align:"center",
      width:70,
      color:"black",
      value:item.title
    })
    const elPosition = position
    elPosition.y = -20
    entityEl.setAttribute("position",elPosition)
    return entityEl
  }
});
