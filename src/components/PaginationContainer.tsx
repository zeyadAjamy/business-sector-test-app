import { useEffect, useState } from "react";
import { MdArrowBackIosNew as ScrollArrowLeft, MdArrowForwardIos as ScrollArrowRight } from "react-icons/md";
import type { ControllerType, CardsType, ContainerType, ListPagesType } from "@/types";

const ListPages = ({ number_pages, currentPageNumber, changePage }: ListPagesType) => (
  <div className="order-2">
    {[...Array(number_pages)].map((_, i) => (
      <span
        className={`px-2 font-[500] cursor-pointer italic sm:hidden md:inline ${currentPageNumber == i + 1 ? "text-green-lime" : "text-gray-dark"}`}
        onClick={() => changePage(i + 1)}
        key={i}
      >
        {i + 1}
      </span>
    ))}
  </div>
);

const PaginationController = ({ changePage, currentPageNumber, number_pages }: ControllerType) => {
  return (
    <div
      className={`${
        number_pages > 1 ? "flex" : "hidden"
      } w-full h-fit py-[5px] mt-[20px] flex-row justify-between items-center`}
    >
      <button
        className="flex items-center px-1 gap-1 order-1 font-[500] text-[18px]"
        onClick={() => changePage(currentPageNumber - 1)}
      >
        <ScrollArrowLeft />
        <span> Назад </span>
      </button>
      <ListPages number_pages={number_pages} currentPageNumber={currentPageNumber} changePage={changePage} />
      <button
        className="flex items-center px-1 gap-1 order-3 font-[500] text-[18px]"
        onClick={() => changePage(currentPageNumber + 1)}
      >
        <span> Далее </span>
        <ScrollArrowRight />
      </button>
    </div>
  );
};

const Cards = ({ list, startItem, numberItemsPage, Template }: CardsType) => {
  return (
    <div className="table-row-group">
      {list.map((element: (typeof list)[0], i: number) => {
        if (i >= startItem && i < startItem + numberItemsPage) {
          return <Template element={element} index={i} key={i} />;
        }
      })}
    </div>
  );
};

const PaginationContainer = ({ list, Template }: ContainerType) => {
  const [startItem, setStartItem] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [numberItemsPage, setNumberItemsPage] = useState(10);
  let totalNumber = list.length;
  let number_pages = Math.ceil(totalNumber / numberItemsPage);

  const changePage = (num: number) => {
    /**
     * 1 -> 0, number_items-1
     * 2 -> number_items, (2*number_items)-1
     * ...
     */

    // Exit if num is zero, less than zero or greater than the page number
    if (num <= 0 || num > number_pages) {
      return;
    }

    let startfrom = (num - 1) * numberItemsPage;

    setStartItem(() => startfrom);
    setCurrentPageNumber(() => num);
  };

  useEffect(() => {
    const handelScrollKeyboard = (e: any) => {
      let key = e.key;

      if (key == "ArrowRight") {
        changePage(currentPageNumber + 1);
      } else if (key == "ArrowLeft") {
        changePage(currentPageNumber - 1);
      }
    };

    window.addEventListener("keydown", handelScrollKeyboard);

    return () => {
      window.removeEventListener("keydown", handelScrollKeyboard);
    };
  });

  return (
    <>
      <Cards list={list} startItem={startItem} numberItemsPage={numberItemsPage} Template={Template} />
      <PaginationController changePage={changePage} currentPageNumber={currentPageNumber} number_pages={number_pages} />
    </>
  );
};

PaginationController.defaultProps = {
  list: [],
};

export default PaginationContainer;
