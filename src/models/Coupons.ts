import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table
export class Coupons extends Model<Coupons> {

    @Column
    valid: boolean

}