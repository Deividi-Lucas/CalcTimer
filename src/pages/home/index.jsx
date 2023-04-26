import { isLeapYear } from 'moontempo'
import { useEffect, useState } from 'react'
import { Card, Main } from './style'
import Header from '../../Components/header'
import { Input } from '../../Components/input'
export default function Home() {
  const [ValueYear, setValueYear] = useState()
  const [ChangeYear, setChangeYear] = useState()
  useEffect(() => {
    if (ChangeYear == '') {
      setValueYear('Digite um valor ')
    } else {
      let Year = isLeapYear(ChangeYear)
      if (Year == true) {
        setValueYear('Esse ano é Bissexto')
      } else {
        setValueYear('Esse ano não é bissexto')
      }
    }
  }, [ChangeYear])

  return (
    <Main>
      <Header title="CalcTimer" />
      <Card>
        <Input
          placeholder="Digite Aqui: "
          onChange={e => setChangeYear(e.target.value)}
        />
        <h4>{ValueYear}</h4>
      </Card>
    </Main>
  )
}
