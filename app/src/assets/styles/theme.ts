import {colors} from 'assets/styles/colors'
import { constants } from './constants'
import { mixins } from './mixings'

const theme ={
    colors,
    constants,
    mixins,
} as const;

export default theme;
