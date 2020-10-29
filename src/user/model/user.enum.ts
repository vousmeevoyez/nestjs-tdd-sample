import { registerEnumType } from '@nestjs/graphql';

enum UserStatus {
  WAITING_VERIFICATION = 'WAITING_VERIFICATION',
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
}

registerEnumType(UserStatus, {
  name: 'UserStatus',
});

export { UserStatus };
