import * as Ably from 'ably';

export type ChannelNameAndOptions = {
  channelName: string;
  ablyId?: string;
  skip?: boolean;

  onConnectionError?: (error: Ably.ErrorInfo) => unknown;
  onChannelError?: (error: Ably.ErrorInfo) => unknown;
};

export type ChannelNameAndAblyId = Pick<ChannelNameAndOptions, 'channelName' | 'ablyId'>;
export type ChannelParameters = string | ChannelNameAndOptions;

export const version = '1.2.50';

export function channelOptionsWithAgent(options?: Ably.ChannelOptions) {
  return {
    ...options,
    params: {
      ...options?.params,
      agent: `react-hooks/${version}`,
    },
  };
}
