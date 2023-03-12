import React, {useEffect, useState, KeyboardEvent} from 'react';
import styles from './Rating.module.css';
import cn from 'classnames';
import {RatingProps} from "@/components/Rating/Rating.props";
import StarIcon from '@/components/Rating/starIcon';

const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating:number) => {
        const updatedArray = ratingArray.map((ratingItem:JSX.Element, ratingIndex:number) => {
            return(
                <span
                    className={cn(styles.star, {
                    [styles.filled]: ratingIndex < currentRating,
                    [styles.editable]: isEditable
                })}
                      onMouseEnter={() => changeStar(ratingIndex+1)}
                      onMouseLeave={() => changeStar(rating)}
                      onClick={() => clickRating(ratingIndex+1)}>
                    <StarIcon
                        tabIndex={isEditable ? 0 : 1}
                        onKeyDown={(event:KeyboardEvent<SVGElement>) => isEditable && handleSpace(ratingIndex + 1, event)}
                    />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };

    const changeStar = (ratingIndex:number) => {
        if(!isEditable) return;
        constructRating(ratingIndex);
    };

    const clickRating = (ratingIndex:number) => {
        if(!isEditable || !setRating) return;
        setRating(ratingIndex);
    };

    const handleSpace = (ratingIndex:number, event:KeyboardEvent<SVGElement>) => {
        if(event.code !== 'Space' || !setRating){
            return;
        }
        setRating(ratingIndex);
    };

    return (
        <div {...props}>
            {ratingArray.map((ratingItem, ratingIndex) => (
                <span key={ratingIndex}>{ratingItem}</span>
            ))}
        </div>
    );
};

export default Rating;