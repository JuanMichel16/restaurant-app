import { postgresqlOrderRepository } from "./postgresqlOrderRepository";
import { localOrderRepository } from "./localOrderRepository";


const repository = process.env.DATABASE_TYPE;

export const getOrderRepository = () => {

  if(repository === 'postgresql') {
    return postgresqlOrderRepository;
  } else {
    return localOrderRepository;
  }
}