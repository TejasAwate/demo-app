export interface ApplicationState {
  count: number;
  greeting: string;
};

export const defaultState: ApplicationState = {
  count: 0,
  greeting: 'Sample-text',
};
