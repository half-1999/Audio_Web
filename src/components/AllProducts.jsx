import React, { useState } from "react";
import "./styles.css";

const Card = ({ color, title, imageSrc, content, category }) => (
  <div className="card">
    <div className="img-box">
      <img src={imageSrc} alt={`Image for ${title}`} />
    </div>
    <div className="content">
      <div className="flex items-center">
        <h2 className={`text-${color} font-bold text-2xl flex items-center`}>
          <div className="title-category-container">
            <span className="title">{title}</span>
            {/* <span className="category">Ctg: {category}</span> */}
          </div>
        </h2>
      </div>
      <p className="text-gray-700 mt-4">{content}</p>

      <a
        href={`/singleProductPage/${title}`}
        className={`btn-${color} font-semibold py-3 px-6 mt-4 inline-block text-white no-underline`}
      >
        View Details
      </a>
    </div>
  </div>
);

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  window.addEventListener("scroll", function () {
    var filterNav = document.querySelector(".filter-nav");
    var scrollPosition = window.scrollY;

    if (scrollPosition >= filterNav.offsetTop) {
      filterNav.classList.add("sticky");
    } else {
      filterNav.classList.remove("sticky");
    }
  });
  const products = [
    // Arche Series
    {
      title: "AR1",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR1.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR2",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR2.jpeg",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR2I",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR2I.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR2H",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR2H.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR3",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR3.jpg",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR32",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR32.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR31",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR31.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR32H",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR32H.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR32I",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR32I.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR33-21",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR33-21.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR331",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR331.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR332",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR332.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR332H",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR332H.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR21",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/AR21.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "AR2 2",
      category: "Arche Series",
      imageSrc: "/src/Images/Arche Series/AR2 2.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "Arce Wireless system",
      category: "Arche Series",
      // imageSrc: "/src/Images/Arche Series/Arce Wireless system.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },

    // Keyer
    {
      title: "44 front",
      category: "Keyer",
      // imageSrc: "/src/Images/Keyer/44 front.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "44",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer2.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "88 back",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer3.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "88 front",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer4.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "88",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer5.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "88D back",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer6.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "88D",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer7.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "1616 front",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer8.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "1616",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer9.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "ERTHPOT",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer10.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "KEYER 88",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer11.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "KEYER 88D",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer12.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "KEYER 1616",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer13.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "keyer All",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer14.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "Keyer DSP",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer15.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "keyer with tab",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer16.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "PC1",
      category: "Keyer",
      // imageSrc: "../../src/Images/Keyer17.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },

    // Novo Conference System
    {
      title: "1",
      category: "Novo Conference System",
      // imageSrc: "/src/Images/Novo Conference system/1.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "2",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo2.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "3",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo3.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "4",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo4.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "5",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo5.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "6",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo6.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "7",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo7.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "img",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo8.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS 5C",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo9.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS 5CF (1)",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo10.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS 5CF (2)",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo11.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS 5D",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo12.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS 5DF (1)",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo13.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS 5DF (2)",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo14.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS 110CU",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo15.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS-5C back",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo16.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS-5C back1",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo17.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS-5C front",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo18.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS-5C side",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo19.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS-5C side1",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo20.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS-5C top",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo21.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS-5D back",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo22.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS-5D back1",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo23.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS-5D front",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo24.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS-5D side",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo25.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS-5D side1",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo26.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS-5D top",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo27.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS110 back",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo28.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS110 back1",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo29.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS110 front",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo30.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS110 side",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo31.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS110 side1",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo32.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NCS110 top",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo33.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NEB-124W back",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo34.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NEB-124W back1",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo35.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NEB-124W front",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo18.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NEB-124W side",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo19.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NEB-124W side1",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo20.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "NEB-124W top",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo21.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "Novo conference system",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo22.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "PC1 FRONT",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo23.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "vc1 p",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo24.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "vc1 with cable",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo25.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "vc1",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo26.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "vd 1",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo27.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "vd1s",
      category: "Novo Conference System",
      // imageSrc: "../../src/Images/Novo28.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },

    // Vector
    {
      title: "VC1",
      category: "Vector",
      // imageSrc: "/src/Images/VECTOR/VC1.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "Vd1",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector2.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "Vector Series",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector3.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "VI60DB",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector4.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "VI512D-GN",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector5.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "VI516gn-l",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector6.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "VI518gn",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector7.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "VI522GN",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector8.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "terminal ",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector8.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },

    {
      title: "vc1 cab",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector10.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "vc1 cable",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector11.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "vc1 p",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector12.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "vc1",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector13.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "vd 1",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector14.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
    {
      title: "vd1s",
      category: "Vector",
      // imageSrc: "../../src/Images/Vector15.png",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  console.log(products);
  return (
    <div className="body bg-gray-800 min-h-screen flex justify-center items-center filter-nav-wrapper">
      <nav className="filter-nav">
        <div
          id="facetedSearch"
          className="facetedSearch sidebarBlock"
          data-filters=""
        >
          <h2 className="facetedSearch__heading">Filter by</h2>
          <div className="filter-buttons">
            <button
              onClick={() => setSelectedCategory("All")}
              className={selectedCategory === "All" ? "active" : ""}
            >
              All Categories
            </button>
            <button
              onClick={() => setSelectedCategory("Arche Series")}
              className={selectedCategory === "Arche Series" ? "active" : ""}
            >
              Arche Series
            </button>
            <button
              onClick={() => setSelectedCategory("Keyer")}
              className={selectedCategory === "Keyer" ? "active" : ""}
            >
              Keyer
            </button>
            <button
              onClick={() => setSelectedCategory("Novo Conference System")}
              className={
                selectedCategory === "Novo Conference System" ? "active" : ""
              }
            >
              Novo Conference System
            </button>
            <button
              onClick={() => setSelectedCategory("Vector")}
              className={selectedCategory === "Vector" ? "active" : ""}
            >
              Vector
            </button>
          </div>
        </div>
      </nav>

      <div className="container relative flex flex-col justify-center items-center flex-wrap gap-8 md:gap-4 py-16 px-8 md:p-16">
        <h1 className="fixed top-0 left-0 right-0 bg-gray-600 text-white h-16 text-3xl flex items-center justify-center ">
          {selectedCategory}
        </h1>

        <div className="product-container mt-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.title}
              color="teal-500" // Replace with dynamic color based on product
              title={product.title}
              imageSrc={`/Images/${product.category}/${product.title}.png`}
              content={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!`}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
