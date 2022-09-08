import React from 'react'

/**
 * 横並びにする
 * 
 * justifyContent 
 * 　flex-start: 左揃え
 * 　space-between: 均等
 * 　space-around: 均等(両端に余白なし)
 *   center: 中央揃え
 * 　flex-end; 右揃え
 * 
 * alignItems 
 * 　flex-start: 上揃え
 * 　center: 中央揃え
 * 　flex-end; 下揃え
 */
export const FlexRow = (props) => {
    const { alignItems, justifyContent, children } = props;

    return (
    <div
        style={
            {display: 'flex', justifyContent: justifyContent, alignItems: alignItems}
        }>
            {children}
        </div>
    )
}

export default FlexRow;