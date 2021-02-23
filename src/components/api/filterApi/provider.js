import converter from './converter';

const getFilters = () => {
  const filters = [
    { id: 1, label: 'Текущие задачи' },
    { id: 2, label: 'Выполненные задачи' },
    { id: 3, label: 'Удаленные задачи' },
  ];

  return Promise.resolve()
    .then(() => converter(filters));
};

export default getFilters;
