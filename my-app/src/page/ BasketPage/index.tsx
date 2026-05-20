import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/hook";
import { ContentContainer, EmptyStub, Icon } from "../../shared/ui";
import styles from "./index.module.scss";
import { ProductItem } from "./ui/ProductItem";
import { removeItemBasket } from "../../app/store/productSlice";

export const BasketPage = () => {
  const { basket } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  const totalPrice = useMemo(() => {
    return basket
      .filter((item) => selectedItems.includes(item.id))
      .reduce((acc, item) => acc + item.price, 0);
  }, [basket, selectedItems]);

  const handleToggleSelect = (id: number) => {
    setSelectedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItems([]);
      setIsAllSelected(false);
    } else {
      setSelectedItems(basket.map((item) => item.id));
      setIsAllSelected(true);
    }
  };

  const handleRemoveSelectedItems = () => {
    for (let i = 0; i <= selectedItems.length; i++) {
      dispatch(removeItemBasket(selectedItems[i]));
    }
  };

  return (
    <ContentContainer>
      <section className={styles.page}>
        <div className={styles.page_title}>
          {basket.length > 0 && (
            <div className={styles.page_title_count}>{basket.length}</div>
          )}
          Корзина
        </div>
        <div className={styles.page_container}>
          {basket.length === 0 ? (
            <EmptyStub title="В корзине ничего нет" />
          ) : (
            <>
              <div className={styles.page_wrapper}>
                <div className={styles.btns}>
                  <div className={styles.btns_all}>
                    <Icon name="checkbox-delete" size={24} />
                    <span onClick={handleSelectAll}>Выделить всё</span>
                  </div>
                  <div
                    className={styles.btns_delete}
                    onClick={handleRemoveSelectedItems}
                  >
                    Удалить выбранные
                  </div>
                </div>

                <div className={styles.page_list}>
                  {basket.map((product) => {
                    const selected = selectedItems.find(
                      (item) => item === product.id,
                    );
                    return (
                      <ProductItem
                        isSelected={!!selected}
                        product={product}
                        onClick={handleToggleSelect}
                      />
                    );
                  })}
                </div>
              </div>
              <div className={styles.page_information}>
                <div className={styles.information_divider}></div>
                <div className={styles.information_wrapper}>
                  <div className={styles.information_title}>
                    {basket.length} товара
                  </div>
                  <div className={styles.information_price}>
                    {Math.round(totalPrice)} ₽{" "}
                  </div>
                </div>
                <div className={styles.information_divider}></div>
                <div className={styles.information_wrapper}>
                  <div className={styles.information_title}>Итог</div>
                  <div className={styles.information_price_total}>
                    {Math.round(totalPrice)} ₽{" "}
                  </div>
                </div>
                <button className={styles.information_btn}>
                  Оформить заказ
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </ContentContainer>
  );
};
