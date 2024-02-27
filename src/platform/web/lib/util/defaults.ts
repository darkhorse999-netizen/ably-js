import IDefaults from 'common/types/IDefaults';
import { TransportNames } from 'common/constants/TransportName';

const Defaults: IDefaults = {
  connectivityCheckUrl: 'https://internet-up.ably-realtime.com/is-the-internet-up.txt',
  /* Order matters here: the base transport is the leftmost one in the
   * intersection of baseTransportOrder and the transports clientOption that's
   * supported. */
  defaultTransports: [TransportNames.XhrPolling, TransportNames.WebSocket],
  baseTransportOrder: [TransportNames.XhrPolling, TransportNames.WebSocket],
  transportPreferenceOrder: [TransportNames.XhrPolling, TransportNames.WebSocket],
  upgradeTransports: [TransportNames.WebSocket],
};

export default Defaults;
