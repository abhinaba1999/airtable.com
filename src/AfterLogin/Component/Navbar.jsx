import React, { useContext } from "react";
import { Image } from "@chakra-ui/react";
import { Button, Stack, Avatar } from "@chakra-ui/react";
import "./Navbar.css";
import { AuthContext } from "./../../AuthContextProvider/AuthContextProvider";
function Navbar({ datas,todo, setTodo }) {
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    datas.forEach((data) => {
      data.status = false;
    })
  };
  console.log(datas);
  return (
    <div className="navbar">
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABR1BMVEX////u7u7t7e339/fv7+/+/v75+fn09PTy8vL7+/szMzMWvv/9tAIAAAD5KV4xMTG7IEgLCwsAu/8SEhIhISEsLCy7urqCgoIXFxcmJiYcHBzn5+f2X3xiYmLf3991dXXDw8Ol3/ipqan38exPT087Ozu6rqr9rAD9rwDV1dXn3dlx0f+zs7OdnZ2RkZH9pgBHR0fs9//w6NuvFjquADD5G1i66f1wb2/Nzs7Pw79aWlp8fHyKior7y3L8vED9th/10aX/9eL32Zz4tl344MD2xYf9wmL8vFPr8v34umr+7c71ypfy3sX58OH6sDj+47j4y4K8cHjOg4xgy/zT7PTkAEeoABfZqLDlJlexNkzNcILv1tvEGUCT2v7EYXGmABHet7utACbhm6nVHUrPkpbBRV63XGv/AE/519vzip72P2rvmKvrssH888rRAAAPX0lEQVR4nO2d+XvaRhrHhaTR5cgyIAGSwhEwxaQWhiQ2xHbSOE2ybdokbpPtsWnSpHt02+7///POpQMQ5hIgnJnn2WfrQfoyH2bmPUajCcf5Rc7QogRVIq3hBb8G8H6V6ldJQVUqpTJcclqMkBEyQkbICFPVrBUR8rREtPyqiJZfIlp+SamU7BdB8ktQFdQI41VX3ZcqKc7vTF7y8dWgz4FfJdAqXgx+ScWvkoMqPpVS8xFmIlr+jQs2a21SjJARMsLNSzHCyVpLmvi1SXGKXySVFimo8mtUYbxK9mvkoCqdUiFqTHyUGYuPuEVDrRRIpSpcZrkFI2SEm28WI2SEM69ipMCJJSAl+kUCtKgZWpPxa4AQXMXRGk7xa2T/Ii6TRimwdOSdRDC5UimWWzBCRrh5KUZ4DQgDzxjR8ktEi5boegEtcsqlOOG6lxA1XQ+MViCVqnCZ5RaMkBFuvlmMcEFCfkktPpVSGS7IhWU/PVaCjDnIoYXgqiDTVv0ayb8o1EqTlHhlfBT8bEF8FPb5nKHW5qQ+gcibETJCRrhxKUZ4DQjT6cSS9Icz7YgQ5tskkSqpENWPAPnkgsk0SH1auUWKmsUIGeHmCJXeV9eYkBd7yp0HD7948OhiU4QxdpmfR2uKie/1Hn951Lpxo9Vqff1kKam5WpXhFn0R4qr7xqtA787TG0c3/HJ08PRCFRaTmrdV63hgJPbEJ8+ODm5Ey8HRsycLSC3QqtVH3krvxaMWGp4jpXX0t8fSfFILtWrFhGKv9+2Dg3E8CvnFgwt1uwnBV4+/Hhmeox359WOut72Ez58eXclHJmTrm+e93jYSgm+ftabhEcbW0bNv5Z6Y5J6oNRC++KY1tfuiHfny0Z2euD2E6qsHs3VfpBy1Lu8I41IpXcVQY5zD9NJqqeNSCaxiBCXBTaGgtQAhHKlgXCql71sIdy7nmYWYr/XFZWOLcgux13j0bI6OhNb01QSpdBJKKBbt8ZcvD2bpSGRIG/g+VWk0toCw8d33bRiu8XyvJ796OHWwHh09fNWgUievX79ppJ/w5t8//rD3owsEaBF63IvLl1eM1lbry8tGj5j/N+9yuZ3c5+knVG8e/3T37r2f//FWFvBy7IsnDyc4x4Ojh09gLIOk1JPXO7kdWLaDcPenX/b27n38+ce31DlfPD0YG62w5psGnKyZTIM7eUfwdlbch+OeZ5E9cohwd/eXu3sQ8u77t/ROcOfB0GBttR5cKLD7+EZDvLXj82HCqf5w06dGSJiQIO7d/fX992859AEAzx/5HQn//9HzHrxPVcGbz0M8TAiWWj+JuS/pUyP4HiHc/SdGhB356/sPoipiqVfI7By8vHwFsyUk9ebWEB4mDKUSalXikbdMCXd/ooh7dz/++zeXSIGLi4s7cPaJGbHR8I3L0oRrzi0En3B310fcu3vvh+8++OrIUDQab96N420JYS8k3P1lby+E3PvxNsBSYoM/2Ynl2w7CSB+Gk5HMyHv/QlJiI777toYw2ocjiHu/foBSjZOJfNtBKA8RhvYGlo/vG4jw1rYQxnuLUUIc31CL+gFLrZYwxlskeD4D2T4wQkicP+JT8a6IqYSz72LY0KkR6hjh7t69H/7zQZVFKnU14fSobdOrGOOEx7/DhFEIpa4i3JbcYohv9+Z/h6WuF+Hx73/cHpWaMkq3ivD4zz/UcanrQ3j8+19unNR1ITze/asnyXFS12MeQj63p8RvRtscYTKeB9w8Pj7+8ze3l5kktW5/GLx5kdBRD8L//rz5PxhYTZSaFtOEUom0KvlTI0TZVcBVUlcR5nLvIlLJtGoFzw/Fq6UmE+Z2Pj8Zlkpl9jRVagIhrLzVm1NqmwhzO+9OGo3teco9J2Fu5/WtRqMhbtdOhZkJc3D2vaEP1a4jYS4HjUtjUanZCAPPuK6jHkLCXO71u94yUjO1av2nRkiUEHWfKkkr/74QdW1HPSBCZFxEOPuWlJqrVevbfn6Sg6ELdO2N5aVmaNVG9uqf3EpMKqWEa5VihIxwuwj5JbXYqRGbkWKnRgRatGob33RmhJ8UoYB3H6ljWgAk0CwJb2TyLxuWIjugVk7Iq4dGE5busBYPCv3yeWVZQtUzkXg7jrBmwU+0grRqQhFopgWLXhjS4uq6bZfs9gRCUcZJWmYqYTGPtGtxhAUdflT6bOWE8iCroWJXQURLkXQLVpb6EwiFQQGWmjQDIZTJxxOiL84vTDiz51H7NibUdPzMjHoeeaCjOkubICV3dViy7pBUjBMbJYxK+YQL+sNZz2cActYghKUOF26SADwmtE+5+B0RXBnfxckRqbijHjhKKIxvrgCY0ClwMa1K9NQITyeAmmXLYiQCPEXfrxckfjyYRFJlOIgNbXowSQlJpD20iiFhwmwhtlVxUqgskFuo+xYl1EqHQkSLL5ccu65OSgiWJYR+hIzSlRMSO5NFc9Esq5E1HyC0BxV06WoJSysnLJvoa+qowdDWyFEtGMDzo81KjpBX1zRK0Sy0TkG9hBrSUUfX7TIjkyeD7o3OQ56PbRa6d4SQhz/ZOKETIUTyiphJltDDv6PHyWiYGs2IFsC2a3iUQhvfgDXICyJC6EvQNjQ+JFSg+wDQIInBzjOfkJfhTRUxbNW4pUFPYEU3stSbAKEkn+LRCSPQooO/Tgq0KsilF+Cloli4f/9+Ad6uFsrNZkWUCoX7tS7yFha6pC0QQr6+37TsZtdzBVHGN7sRQlDxmk3TanYPXdqqUUujVrxTKGA0TwvufIQx3sKvkipokNr70KwM6H8FWmU9m83qFZGXavi/CpzQ1x3Lqogi+htbYAt90IeRCi9ynp21IbVh5c0658JL8roXEnKHWfKxnXXqXMRbBJZGKZby+ArD1J3DGQhnenuBO0V2Rq8BWHVqYFuj+q8zVLEJqggyqCH47H21ibrZgjW2oYXFqXIwe8h09aDG0DsK+guiSJSwfR5+rOmGiF4HoTHNIW4q186XIqJ6V+ESOTXCNdGP1nRRBNhxcFzjPysghDpKLgqE0MvjbqtwgjlEWERdUo62D3rWEiZUadRmeWb0Y1PDmx4iUZvQtvCgsE2T/HxmWcgkcWpEHX19qcohLfyzG10a444R6m3HoIQyHILkD60ER2kVXlLN0rbns1nIb5SMIUIN/XomHNI0BHbOOC4aectKHgE6er/TqZbwHXCI88vnFmoX25nbAtbat/GIFeIJjVNbMxxdNysc8DqdThNbmmKncz6AVomMQdssd+peVcvTngwJIZ9x5tW9skMY84MoIa+eoz7PVrHZls9RvdHkE8iesHWxNBiOIq1DJGyecvGE8DpH79RqAzzpVeIPm1QIj3AI0UYuhnPP9DFCvU/sY7uJx6tZjY5SxTXJV9NSxLw1eXlCnDc50M1jQhd3S34gxxNqelUNpQTkZgyDvCWKG6hZXUHiyeTp41kZGaX5c3Ij9E9NNG4MPUoIsFe2K1Rd4i0CvDRhhczpCjJZ6O8z1FDHA3wsoV0O1VVeKkcIySDVa9iU4x9LG56Hhk0bCw0fCYT1doQQTxCrDPwMCZzh2VMJv3BBwjoxD4MaKjBhx4PDMiUxltBxlYjUECEe35ZFvlMMxllI6Hj0RtjHah83vx4SipKGDem+X3A0oWUHYXizICFep9CMLLR/+H/ECOiHahwhzIUzkwg7iMc8oxvgUA12oeE8DNw6JCRXw3Q7IFQqeJQbVlAwoT6FcPoqRjvihCPFLqtx/hB5yug6TXQe4h4rHUrh0oM4TBhdxRDq+LPzMUIoN1TyUcIYfxiUSTs5hb4ZS6iVyNIfJYQRJ4lpDoelwtyCB9jWl+ohhYxnZhbVUEIl/G2JWTkHUpBbVKil2h8q3cFy71vIbjYeUCt5UUIxIxHCwqT8EJpCRGGWiTgyVCqe4k5IiEc+TVPOsd/1pDC3ILazGr4rQwpYKrfgVRzPaKYeLWRRSp+TUCrgyEwPCHmA/VDYh2jk+4QytiMwsgj7kEORh132bUd4WNMyhKKK/ZLZ52/j0sblEHtusjY8C6GB7a5YISshHm0Wr9awP8wHhCi495NpYsF1V45kT30cEw9I81GqCSpgWULfLQ38q/C2JoAtud0HsxGi4AvVkbyEJrMgA0cdttKlkNDSXPT+GY/iKIN0eCaSAdPgCkh+Mn2G/OVShLxaRePI8gMluvQgENeH14ZnITTMzwq8wgPqWfUOMr2VOnFDkVGKkOouB7h2BwPC7gXRVQwFB8i2XcNRn1rr5i1TXo5QEfE3Zb0hwowCcDUy5dMI8cDSLEcvCLyiUteaN0/LpxbMOzBGaGng30ZeK5fLDr4LhdXi0EoUDX1Lp0XPq+7n4a+fPV+KELpdHEzp8jAhz2EXYlnqVMIB9aYoGaHpOm6kjVgtPMnDPjRsG3l021+aRdOSl6IrUX0iZ5XyfmKm15Y5NSKTwVG23ecCQlKEWt6fUT4h9YfI/ESl1H3TJ0Qu0dMjWbGl4WgitDROrWuHHxv6ebiK4a/TFKMCsGko6Fni1AgAe8AwoBdXR5cJyBI4tO5c1YGX5CuqxNXI+j43JCWJho5yfViPbuM83fFbZ+qugPTNOifTTGjQts3wYw9AqyahoWlozmcANwAUQwH4G1g1brlTI84drdm0uoCuSUWyaQ8979N0ETnmZtNBNqeWhTVmQRqSgv1YqHZNO3g0WCmWsiXHLGX1osjx0LM2TU/gVc8xLMNuc3KffKxDB8XRZ084nD0kq5EZrnKez+bRJXm9Wwd+IkbK/KdGyC7sZ5dX/atCLcHFRRDJJchvyLRmREoRQKbiVugAEmTgHp73+8U6+lEAvhml1uRmJFM5LJbPijVXlWmrVHxR8LQQJl0DrwgVvIoIFD6zsp0KdI9OdBMMqYmREsP5DmejouK3hoIqYpjQFqCgCm35GW4VGG8VWi4ebVWShONaMz/Hxxbgain/IQDbbcIIGeFVWuN2eeFmrVQq8VMjUicVoqbrH0RfgVSqti6zfd6MkBFuvlmMkBGu9NSI9EkFb14kdGpE2qSSPzUidVIst2CEjHDzUozwGhAGnnFdp0asW2r9p0asu4Soazs1YlNSqQqXWW7BCBnh5pvFCBck5JfUYqdGbEaKnRoRaNGqbYy8GSEjZIQbl2KE14AwnU4sSX84046I2c5nSKdUiDrt1AhclvjX4zck9WnlFilqFiNkhIxw881a7SpG3KkRCZj4TUnNeGrEnP9WZqqkUvrAKEGpTyDyZoSMkBFuXIoRMsL0E/4fW2+2mTKGR30AAAAASUVORK5CYII="
        alt="logo-login"
      />
      <Button onClick={() => setTodo(!todo)} id="TodoList">
        Todo List
      </Button>

      <Stack direction="row" className="nav">
        <Avatar src="https://bit.ly/broken-link" />
        <Button onClick={handleLogout}>Logout</Button>
      </Stack>
    </div>
  );
}

export default Navbar;
