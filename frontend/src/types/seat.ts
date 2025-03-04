export interface ISeat {
  id: string;
  isAvailable: boolean;
  isNearWindow: boolean;
  isExtraLegroom: boolean;
  isNearExit: boolean;
  isFiltered?: boolean;
}
