
      var productData = {
        id: "1",
        name: "Men Navy Blue Solid Sweatshirt",
        preview:
          "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        photos:[
          "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
          "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
          "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
          "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
          "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
        ],
        description:
          "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
        size: [1, 1, 0, 1, 0],
        isAccessory: false,
        brand: "United Colors of Benetton",
        price: 2599,
      };

      const main = document.getElementById("main");
      console.log(main);
      let full_image = document.createElement("img");
      full_image.id = "full_image";
      full_image.src =
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
      console.log(main);
      main.appendChild(full_image);

      let left_container = document.createElement("div");
      left_container.id = "left_container";
      main.appendChild(left_container);

      let name = document.createElement("h1");
      name.textContent = productData.name;
      name.id = "name";

      let brand = document.createElement("h5");
      brand.textContent = productData.brand;
      brand.id = "brand";

      let price = document.createElement("h5");
      price.textContent = `Price :Rs `;
      price.id = "price";
      let price1 = document.createElement("span")
      price1.textContent = productData.price;
      price1.id="price1";

      let desc = document.createElement("h5");
      desc.textContent = "Description";
      desc.id = "desc";

      let desc_exp = document.createElement("p");
      desc_exp.textContent = productData.description;
      desc_exp.id = "desc_exp";

      let preview = document.createElement("h5");
      preview.textContent = " Product Preview";
      preview.id = "preview";

      let img_cont = document.createElement("div");
      img_cont.id = "img_cont";

      left_container.appendChild(name);
      left_container.appendChild(brand);
      left_container.appendChild(price);
      left_container.appendChild(desc);
      left_container.appendChild(desc_exp);
      left_container.appendChild(preview);
      left_container.appendChild(img_cont);
      price.appendChild(price1);

      productData.photos.forEach((photo, index) => {
        let img_btn = document.createElement("img");
        img_btn.id = `img_btn_${index}`;
        img_btn.className = "img_btn";
        if (index === 0) img_btn.style.border = "2px solid green";
        img_btn.src = photo;

        img_btn.addEventListener("click", (event) => {
          full_image.src = photo;

          productData.photos.forEach((photo, index) => {
            let btn = document.getElementById(`img_btn_${index}`);
            console.log(btn);
            btn.style.border = "none";
          });

          img_btn.style.border = "2px solid green";
        });

        img_cont.appendChild(img_btn);
      });

      let add_to_cart = document.createElement("button");
      add_to_cart.textContent = "Add to Cart";
      add_to_cart.id = "add_to_cart";

      left_container.appendChild(add_to_cart);
  