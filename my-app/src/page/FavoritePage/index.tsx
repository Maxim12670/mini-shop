import styles from "./index.module.scss";
import { ContentContainer, EmptyStub } from "../../shared/ui";
import { ProductCard } from "../../feature/ui";
import { useAppSelector } from "../../app/store/hook";
import { useMemo, useState, type ChangeEvent } from "react";

export const FavoritePage = () => {
  const { product } = useAppSelector((state) => state.product);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [minPriceInput, setMinPriceInput] = useState<string>("");
  const [maxPriceInput, setMaxPriceInput] = useState<string>("");

  const favoriteProduct = product.filter((item) => item.isFavorite === true);

  const filteredProducts = useMemo(() => {
    return favoriteProduct.filter((item) => {
      const isMinValid = minPrice === null || item.price >= minPrice;

      const isMaxValid = maxPrice === null || item.price <= maxPrice;

      return isMinValid && isMaxValid;
    });
  }, [favoriteProduct, minPrice, maxPrice]);

  const handleApplyFilters = () => {
    const min = minPriceInput === "" ? null : Number(minPriceInput);
    const max = maxPriceInput === "" ? null : Number(maxPriceInput);

    if (min !== null && isNaN(min)) return;
    if (max !== null && isNaN(max)) return;

    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleClearFilters = () => {
    setMinPriceInput("");
    setMaxPriceInput("");
    setMinPrice(null);
    setMaxPrice(null);
  };

  const handleChangeMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setMinPriceInput(e.target.value);
  };

  const handleChangeMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPriceInput(e.target.value);
  };

  return (
    <ContentContainer>
      <section className={styles.favorite}>
        <h2 className={styles.favorite_title}>Избраное</h2>
        <div className={styles.favorite_wrapper}>
          <div className={styles.favorite_filters}>
            <div className={styles.favorite_filters_title}>Фильтр</div>
            <div className={styles.price}>
              <div className={styles.price_wrapper}>
                <span className={styles.price_title}>Цена</span>
                <button
                  className={styles.price_btn}
                  onClick={handleClearFilters}
                >
                  Очистить
                </button>
              </div>
              <div className={styles.price_container}>
                <input
                  type="text"
                  className={styles.price_input}
                  onChange={handleChangeMinPrice}
                />
                <div className={styles.price_divider}></div>
                <input
                  type="text"
                  className={styles.price_input}
                  onChange={handleChangeMaxPrice}
                />
              </div>
            </div>
            <button
              className={styles.favorite_btn}
              onClick={handleApplyFilters}
            >
              Применить
            </button>
          </div>
          <div className={styles.favorite_list}>
            {favoriteProduct.length === 0 ? (
              <EmptyStub title="У вас нет избранных товаров" />
            ) : filteredProducts.length !== 0 ? (
              filteredProducts.map((item) => <ProductCard {...item} />)
            ) : (
              <EmptyStub title="По выбранным фильтрам ничего нет" />
            )}
          </div>
        </div>
      </section>
    </ContentContainer>
  );
};
