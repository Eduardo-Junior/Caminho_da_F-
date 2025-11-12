import { sequelize } from "../database/db.js";
import { Ramal } from "./ramalModel.js";
import { Pousada } from "./pousadaModel.js";
import { Attributes } from "./attributesModel.js";
import { Payments } from "./paymentMethodsModel.js";

// Relações
Ramal.hasMany(Pousada, { foreignKey: "ramalId", as: "pousadas" });
Pousada.belongsTo(Ramal, { foreignKey: "ramalId", as: "ramal" });

Pousada.belongsToMany(Attributes, {
  through: "PousadaAtributos",
  as: "atributos",
  foreignKey: "pousadaId",
});
Attributes.belongsToMany(Pousada, {
  through: "PousadaAtributos",
  as: "pousadas",
  foreignKey: "atributoId",
});

Pousada.belongsToMany(Payments, {
  through: "PousadaPagamentos",
  as: "pagamentos",
  foreignKey: "pousadaId",
});
Payments.belongsToMany(Pousada, {
  through: "PousadaPagamentos",
  as: "pousadas",
  foreignKey: "pagamentoId",
});

export { sequelize, Ramal, Pousada, Attributes, Payments };


// import sequelize from "../database/db.js";
// import Ramal from "./ramalModel.js";
// import Pousada from "./pousadaModel.js";
// import Atributos from "./attributeModel.js";
// import Pagamentos from "./paymentMethodModel.js";

// Ramal.hasMany(Pousada, { foreignKey: 'ramalId', as: 'pousadas' });

// Pousada.belongsTo(Ramal, { foreignKey: 'ramalId', as: 'ramal' });
// Pousada.belongsToMany(Atributos, { through: 'PousadaAtributos', as: 'atributos', foreignKey: 'pousadaId' });
// Pousada.belongsToMany(Pagamentos, { through: 'PousadaPagamentos', as: 'pagamentos', foreignKey: 'pousadaId' });

// Atributos.belongsToMany(Pousada, { through: 'PousadaAtributos', as: 'pousadas', foreignKey: 'atributoId' });

// Pagamentos.belongsToMany(Pousada, { through: 'PousadaPagamentos', as: 'pousadas', foreignKey: 'pagamentoId' });

// export { sequelize, Ramal, Pousada, Atributos, Pagamentos };