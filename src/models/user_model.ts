import { Model, DataTypes, Sequelize, Association } from "sequelize";

const USER_TABLE = "user";

interface UserAttributes {
  id: number;
  username: string;
  password: string;
}

class UserModel extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;
}

const UserSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

class User extends UserModel {
  static associate(models: any) {}

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: true,
    };
  }
}

export { User, UserSchema };
