import React, {useState} from "react";
import {withLayout} from "@/layout/Layout";
import {GetStaticProps} from "next";
import {MenuItem} from "@/interfaces/menu.interface";

function Course({menu, firstCategory}: CourseProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>

        </>
    );
}

export default withLayout(Course);

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

interface CourseProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}
