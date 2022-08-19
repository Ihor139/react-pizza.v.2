import React from "react";
import qs from "qs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Categories } from "../components/Categories";
import { PizzaBlock, PizzaBlockProps } from "../components/PizzaBlock";
import { Sort, sortList } from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Pagination } from "../components/Pagination";

import {
  fetchItems,
  selectPizza,
  setIsLoading,
} from "../redux/slices/pizzaSlice";
import { filterSelect, setFilterParams } from "../redux/slices/filterSlice";
import {
  selectCurrentPage,
  setCurrentPage,
} from "../redux/slices/paginationSlice";
import { selectSearchTerm } from "../redux/slices/searchSlice";

export const Home: React.FC = () => {
  //navigate
  const navigate = useNavigate();

  // redux
  const dispatch = useDispatch();
  const { categoryId, sortType } = useSelector(filterSelect);
  const searchTerm = useSelector(selectSearchTerm);
  const currentPage = useSelector(selectCurrentPage);
  const { items, status } = useSelector(selectPizza);

  //refs
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const getPizza = async () => {
    dispatch(setIsLoading("loading"));

    const sortBy = sortType.sortProperty.replace("_", "");
    const order = sortType.sortProperty.includes("_") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchTerm ? `&search=${searchTerm}` : "";

    // вынесли логику получения данных с UI в redux

    // @ts-ignore ?????????????
    dispatch(fetchItems({ sortBy, order, category, search, currentPage }));

    // try {
    //   dispatch(fetchItems({ sortBy, order, category, search, currentPage }));
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   dispatch(setIsLoading('successes'));
    // }
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sortType = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
      console.log(sortType);

      dispatch(setFilterParams({ ...params, sortType }));
      dispatch(setCurrentPage(params.currentPage));
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getPizza();
    }

    isSearch.current = false;
  }, [categoryId, sortType, searchTerm, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, currentPage]);

  const renderPizza = () => {
    // подходит для поиска по статичным данным
    const filteredItems = items.filter((item: PizzaBlockProps) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredItems.map((item: PizzaBlockProps) => (
      <PizzaBlock {...item} key={item.id} />
    ));
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {status === "error" ? (
          <div className="error__info">
            <h2>
              Ошибка <b>😕</b>
            </h2>
            <p>
              Произошла ошибка
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        ) : (
          <>
            <div className="content__items">
              {status === "loading"
                ? [...Array(4)].map((item, ind) => <Skeleton key={ind} />)
                : renderPizza()}
            </div>
            <Pagination />
          </>
        )}
      </div>
    </div>
  );
};
