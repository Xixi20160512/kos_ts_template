import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table
export class Coupons extends Model<Coupons> {

    // @see: https://github.com/sequelize/sequelize/issues/7351#issuecomment-285682833
    @Column({ primaryKey: true, type: DataType.STRING(126).BINARY })
    id: string

    @Column(DataType.DATE)
    createTime: Date

    @Column
    valid: boolean
}