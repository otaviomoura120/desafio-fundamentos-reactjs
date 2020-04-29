const formatDate = (value: Date): string => {
  const formatter = new Intl.DateTimeFormat('pt-BR');

  return formatter.format(value);
};

export default formatDate;
