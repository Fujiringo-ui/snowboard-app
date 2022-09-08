import React from 'react'

/**
 * 縦並びにする
 * 
 * justifyContent 
 * 　flex-start: 上揃え
 * 　space-between: 均等
 * 　space-around: 均等(両端に余白なし)
 *   center: 中央揃え
 * 　flex-end; 下揃え
 * 
 * alignItems 
 * 　flex-start: 左揃え
 * 　center: 中央揃え
 * 　flex-end; 右揃え
 */
export const FlexColumn = (props) => {
    const { alignItems, justifyContent, children } = props;

    return (
    <div
        style={
            {display: 'flex', flexDirection: 'column', justifyContent: justifyContent, alignItems: alignItems}
        }>
            {children}
        </div>
    )
}

export default FlexColumn;