import {DayAdd} from './dayAdd'
import {DayAdd1} from './dayAdd1'
import {Dead} from './dead'
import {Heal} from './heal'
import { WhereAddMost } from './whereAddMost'

function Index7()
{
    return(
        <div style={{width:'100%',overflow:'clip'}}>
            <DayAdd/>
            <DayAdd1/>
            <Dead/>
            <Heal/>
            <WhereAddMost/>
        </div>
    )   
}
export{
    Index7
}