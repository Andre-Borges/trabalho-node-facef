import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Produto extends Model {}

  Produto.init(
    {
      descricao: dataTypes.STRING,
      quantidade: dataTypes.INTEGER,
      valor: dataTypes.DECIMAL,
    },
    { sequelize, modelName: 'produto' },
  );

  Produto.associate = models => {
    models.produto.belongsTo(models.categoria, {
      as: 'categoria',
      foreignKey: 'categoriaId',
    });
    models.produto.belongsToMany(models.pedido, {
      foreignKey: 'produto_id',
      through: 'produtos_pedido',
      as: 'pedido',
      onDelete: 'CASCADE',
    });
  };

  return Produto;
};
