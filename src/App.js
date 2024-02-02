import './App.css';
import { useState } from 'react';
// GJ 05 JF 1133
function App() {
  let [disp, setdisp] = useState('');
  let [temp1, settemp1] = useState('');
  let [shine, setshine] = useState('');
  // let [temp2, settemp2] = useState('');
  // let [equal, setequal] = useState('');
  // const add = (z) =>{
  //   setdisp(disp+z)
  // }
  return (
    <>

      <table>
        <tr>
          <td colSpan={4}>
            <input type="text" value={disp} readOnly className='disp box-none'/>
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value='CE' className="color1 box-none" onClick={(e) => {
              setdisp('')
            }
            } />
          </td>
          <td>
            <input type="button" value='C' className="color1 box-none" onClick={(e) => {
              setdisp('')
              settemp1('')
              setshine('')
            }
            } />
          </td>
          <td colSpan={2}>
            <input type="button" value='Remove' className='remove color2 box-none' onClick={(e) => {
              setdisp(disp.substring(0, disp.length - 1))
            }} />
          </td>
        </tr>

        <tr>
          <td>
            <input type="button" value={7} onClick={(e) => { setdisp(disp + e.target.value) }} />

          </td>
          <td>
            <input type="button" value={8} onClick={(e) => { setdisp(disp + e.target.value) }} />
          </td>
          <td>
            <input type="button" value={9} onClick={(e) => { setdisp(disp + e.target.value) }} />
          </td>
          <td>
            <input type="button" value='/' className="color3 box-none" onClick={(e) => {
              setshine(e.target.value)
              settemp1(disp)
              setdisp('')
            }} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value={4} onClick={(e) => { setdisp(disp + e.target.value) }} />
          </td>
          <td>
            <input type="button" value={5} onClick={(e) => { setdisp(disp + e.target.value) }} />
          </td>
          <td>
            <input type="button" value={6} onClick={(e) => { setdisp(disp + e.target.value) }} />
          </td>
          <td>
            <input type="button" value='*' className="color4 box-none" onClick={(e) => {
              setshine(e.target.value)
              settemp1(disp)
              setdisp('')
            }} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value={1} onClick={(e) => { setdisp(disp + e.target.value) }} />
          </td>
          <td>
            <input type="button" value={2} onClick={(e) => { setdisp(disp + e.target.value) }} />
          </td>
          <td>
            <input type="button" value={3} onClick={(e) => { setdisp(disp + e.target.value) }} />
          </td>
          <td>
            <input type="button" value='-' className="color5 box-none" onClick={(e) => {
              setshine(e.target.value)
              settemp1(disp)
              setdisp('')
            }} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value='.' onClick={(e) => { setdisp(disp + e.target.value) }} />
          </td>
          <td>
            <input type="button" value={0} onClick={(e) => { setdisp(disp + e.target.value) }} />
          </td>
          <td>
            <input type="button" value='=' className="color1 box-none" onClick={(e) => {
              if (shine === '+') {
                setdisp(String(parseFloat(temp1) + parseFloat(disp)))
              }
              else if (shine === '-') {
                setdisp(String(parseFloat(temp1) - parseFloat(disp)))
              }
              else if (shine === '*') {
                setdisp(String(parseFloat(temp1) * parseFloat(disp)))
              }
              else if (shine === '/') {
                setdisp(String(parseFloat(temp1) / parseFloat(disp)))
              }
            }} />
          </td>
          <td>
            <input type="button" value='+' className="color6 box-none" onClick={(e) => {
              setshine(e.target.value)
              settemp1(disp)
              setdisp('')
            }} />
          </td>
        </tr>
      </table>
      {/* <input type="text" value={disp} />
      <input type="button" value={1} onClick={add('1') } />
      <input type="button" value={2} onClick={add('2') } /> */}
    </>
  );
}

export default App;
