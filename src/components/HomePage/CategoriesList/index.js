import React from 'react';
import { View, ScrollView } from 'react-native';
import { WingBlank } from '@ant-design/react-native';
import P from 'prop-types';
import CATEGORY_COLORS from 'shared/constants/categoryColors';
import Category from './Category';
import style from './style';

const CategoriesList = ({ categories, handleCategoryId, categoryId }) => {
  const renderCategory = categoriesArray =>
    categoriesArray.map(({ _id, icon, title }, i) => (
      <WingBlank size="sm" key={_id}>
        <Category
          key={_id}
          {...{
            _id,
            icon,
            title,
            onSelect: handleCategoryId,
            isActive: categoryId === _id,
            backgroundColor: CATEGORY_COLORS[i],
          }}
        />
      </WingBlank>
    ));
  return (
    <View style={style.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <WingBlank style={{ flexDirection: 'row' }}>{renderCategory(categories)}</WingBlank>
      </ScrollView>
    </View>
  );
};

CategoriesList.defaultProps = {
  categoryId: null,
};

CategoriesList.propTypes = {
  categories: P.array.isRequired,
  handleCategoryId: P.func.isRequired,
  categoryId: P.string,
};

const comparisonFn = (prevProps, nextProps) => prevProps.categoryId === nextProps.categoryId;

export default React.memo(CategoriesList, comparisonFn);
