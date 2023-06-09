import React, {useState} from "react";
import Htag from "@/components/Htag/Htag";
import Button from "@/components/Button/Button";
import Ptag from "@/components/Ptag/Ptag";
import Tag from "@/components/Tag/Tag";
import Rating from "@/components/Rating/Rating";
import {withLayout} from "@/layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "@/interfaces/menu.interface";

function Home({menu, firstCategory}: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

  return (
      <>
          <Htag tag={'h1'}>Text</Htag>

          <Button appearance={'ghost'} arrow={'down'}>Button</Button>
          <Button appearance={'primary'} arrow={'right'}>Button</Button>

          <Ptag defaultSize={'s'}>Text text text text</Ptag>
          <Ptag>Text text text text</Ptag>
          <Ptag defaultSize={'l'}>Text text text text</Ptag>

            <Tag color={'ghost'} defaultSize={'m'}>Text</Tag>
            <Tag color={'gray'} defaultSize={'m'}>Text</Tag>
            <Tag color={'green'} defaultSize={'m'}>Text</Tag>
            <Tag color={'primary'} defaultSize={'m'}>Text</Tag>
            <Tag color={'red'} defaultSize={'s'} href={'google.com'}>Text</Tag>

          <Rating rating={rating} isEditable={true} setRating={setRating}/>

          <ul>
              {menu.map(item => <li key={item._id.secondCategory}>{item._id.secondCategory}</li>)}
          </ul>
      </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
    try {
        const firstCategory = 0;
        // const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        //     firstCategory
        // });
        console.log(123);
        return {
            props: {
                menu: [
                    {
                        _id: {
                            secondCategory: "Аналитика",
                        }
                    },
                    {
                        _id: {
                            secondCategory: "Бизнес",
                        }
                    },
                    {
                        _id: {
                            secondCategory: "Дизайн",
                        }
                    },
                    {
                        _id: {
                            secondCategory: "Маркетинг",
                        }
                    },
                    {
                        _id: {
                            secondCategory: "Программирование",
                        }
                    },
                    {
                        _id: {
                            secondCategory: "Прочее",
                        }
                    },
                ],
                firstCategory
            }
        };
    } catch {
        return {
            props: {
                menu: [],
                firstCategory: 0
            }
        };
    }
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}
