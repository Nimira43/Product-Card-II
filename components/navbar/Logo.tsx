import Link from "next/link"
import { GiForestCamp } from 'react-icons/gi'
import { Button } from '../ui/button'

function Logo() {
  return (
    <Button 
      size='icon' asChild
    >
      <Link href='/'>
        <GiForestCamp className='w-6 h-6' />
      </Link>      
    </Button>
  )
}
export default Logo