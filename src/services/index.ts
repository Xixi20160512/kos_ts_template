import { Service } from 'typedi'
import { Coupons } from '../models/Coupons';



@Service()
export default class IndexService {
    async sayHello() {
        let res = await Coupons.findAll().then(res => res.map(r => r.toJSON()))
        return res
    }

}
