import React, { useState, useEffect } from "react";

export const SliderTestimonial = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  function fetchData() {
    setLoading(true);
    fetch("https://mock-jsonserver.onrender.com/comments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex < data.length - cardsPerView) {
      setStartIndex(startIndex + 1);
    }
  };

  function getCardsPerView() {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    return 2;
  }

  return (
    <div className="flex items-center justify-start md:ml-16 m-auto   w-[95%] h-full">
      <div className="absolute left-5 z-10">
        <button
          onClick={handlePrevClick}
          disabled={startIndex === 0}
          className={`bg-yellow-300 w-10 h-10 p-2 rounded-full ${
            startIndex === 0 ? "opacity-50" : ""
          }`}
          style={{ cursor: startIndex === 0 ? "not-allowed" : "pointer" }}
        >
          &lt;
        </button>
      </div>

      <div className="flex overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${startIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {loading
            ? "Loading"
            : data.map((card) => (
                <div
                  key={card.id}
                  className={` relative rounded-xl flex-none p-1 md:m-1 h-full bg-blue-200  ${
                    cardsPerView === 4
                      ? "w-1/4"
                      : cardsPerView === 3
                      ? "w-1/3"
                      : "w-1/2"
                  }`}
                >
                  <p className="font-bold">{card.name}</p>
                  <p>{card.comment}</p>
                  <div className="absolute w-10 h-10 rounded-full overflow-hidden bottom-0 right-0">
                    <img
                      src={card.image}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div className="absolute right-5">
        <button
          onClick={handleNextClick}
          disabled={startIndex >= data.length - cardsPerView}
          className={`bg-yellow-300 w-10 h-10 p-2 rounded-full ${
            startIndex >= data.length - cardsPerView ? "opacity-50" : ""
          }`}
          style={{
            cursor:
              startIndex >= data.length - cardsPerView
                ? "not-allowed"
                : "pointer",
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
