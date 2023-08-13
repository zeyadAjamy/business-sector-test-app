import { useEffect, useState } from "react";
import { MdArrowBackIosNew as ScrollArrowLeft, MdArrowForwardIos as ScrollArrowRight } from "react-icons/md";
import type { ControllerType, CardsType, ContainerType, ListPagesType } from "@/types";

const ListPageNumbers = ({ totalNumberOfPages, currentPageNumber, changePage }: ListPagesType) => (
  <div className="order-2">
    {[...Array(totalNumberOfPages)].map((_, i) => (
      <span
        className={`px-2 font-[500] cursor-pointer italic sm:hidden md:inline ${
          currentPageNumber == i + 1 ? "text-green-lime" : "text-gray-dark"
        }`}
        onClick={() => changePage(i + 1, totalNumberOfPages)}
        key={i}
      >
        {i + 1}
      </span>
    ))}
  </div>
);

const PaginationController = ({ changePage, currentPageNumber, totalNumberOfPages }: ControllerType) => {
  return (
    <div
      className={`${
        totalNumberOfPages > 1 ? "flex" : "hidden"
      } w-full h-fit py-[5px] mt-[20px] flex-row justify-between items-center`}
    >
      <button
        className="flex items-center px-1 gap-1 order-1 font-[500] text-[18px]"
        disabled={currentPageNumber == 1}
        onClick={() => changePage(currentPageNumber - 1, totalNumberOfPages)}
      >
        <ScrollArrowLeft />
        <span> Назад </span>
      </button>
      <ListPageNumbers
        totalNumberOfPages={totalNumberOfPages}
        currentPageNumber={currentPageNumber}
        changePage={changePage}
      />
      <button
        className="flex items-center px-1 gap-1 order-3 font-[500] text-[18px]"
        disabled={currentPageNumber == totalNumberOfPages}
        onClick={() => changePage(currentPageNumber + 1, totalNumberOfPages)}
      >
        <span> Далее </span>
        <ScrollArrowRight />
      </button>
    </div>
  );
};

const Cards = ({ list, startItem, numberItemsPage, Template }: CardsType) => {
  return (
    <div className="w-full">
      {list.map((element: (typeof list)[0], i: number) => {
        if (i >= startItem && i < startItem + numberItemsPage) {
          return <Template element={element} index={i} key={i} />;
        }
      })}
    </div>
  );
};

// TODO: Print to the user the error of page number excced the availible pages
const PaginationContainer = ({ list = [], Template = (element) => <></>, startIndex }: ContainerType) => {
  const [startItem, setStartItem] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [numberItemsPage, setNumberItemsPage] = useState(10);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const changePage = (num: number, totalNumberOfPages: number) => {
    /**
     * 1 -> 0, number_items-1
     * 2 -> number_items, (2*number_items)-1
     * ...
     */

    // Exit if num is zero, less than zero or greater than the page number
    console.log(num, totalNumberOfPages)
    setNumberOfPages(totalNumberOfPages);
    if (num <= 0 || num > totalNumberOfPages) {
      // console.error("The page number does not exist!");
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
        changePage(currentPageNumber + 1, numberOfPages);
      } else if (key == "ArrowLeft") {
        changePage(currentPageNumber - 1, numberOfPages);
      }
    };

    window.addEventListener("keydown", handelScrollKeyboard);

    return () => {
      window.removeEventListener("keydown", handelScrollKeyboard);
    };
  });

  useEffect(() => {
    const totalNumberOfPages = Math.ceil(list.length / numberItemsPage);
    const startIndexNum = parseInt(startIndex as string);
    if (!isNaN(startIndexNum)) changePage(startIndexNum, totalNumberOfPages);
  }, [list]);

  return (
    <>
      <Cards list={list} startItem={startItem} numberItemsPage={numberItemsPage} Template={Template} />
      <PaginationController
        changePage={changePage}
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={numberOfPages}
      />
    </>
  );
};

export default PaginationContainer;
