import { User } from './user.model';

export const lastUserid = async () => {
  const findLastId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return findLastId?.id;
};

export const generateUserId = async () => {
  const currentUserId = (await lastUserid()) || '0';
  const incrementedId = (parseInt(currentUserId) + 1)
    .toString()
    .padStart(5, '0');
  return incrementedId;
};
