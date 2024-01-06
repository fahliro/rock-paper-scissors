import { ItemType, Result } from "../enums";

export interface IStates {
    isMainContent: boolean,
    setIsMainContent: React.Dispatch<React.SetStateAction<boolean>>,
    showResult: boolean,
    setShowResult: React.Dispatch<React.SetStateAction<boolean>>,
    showRules: boolean,
    setShowRules: React.Dispatch<React.SetStateAction<boolean>>,
    yourPicked: ItemType | undefined,
    setYourPicked: React.Dispatch<React.SetStateAction<ItemType | undefined>>,
    theHousePicked: ItemType | undefined,
    setTheHousePicked: React.Dispatch<React.SetStateAction<ItemType | undefined>>,
    timer: ITimer,
    setTimer: React.Dispatch<React.SetStateAction<ITimer>>,
    result: Result | undefined,
    setResult: React.Dispatch<React.SetStateAction<Result | undefined>>,
    ROCK: ItemType.ROCK,
    PAPER: ItemType.PAPER,
    SCISSORS: ItemType.SCISSORS,
    LIZARD: ItemType.LIZARD,
    SPOCK: ItemType.SPOCK,
    isWin: boolean,
    isLose: boolean,
    isDraw: boolean

}

export interface IProps {
    props: IStates
}

export interface IIcon {
    value: string,
    label: ItemType | undefined
}

export interface IItemPicked {
    isTheHouse?: boolean,
}

export interface IPing {
    bg: string,
    w: string,
    h: string,
    mdw: string,
    mdh: string
}

export interface ITimer {
    result: number,
    theHousePicked: number
}