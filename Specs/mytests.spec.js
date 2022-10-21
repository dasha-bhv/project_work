const Spaces = require('../framework/services/methods');


describe('Tests for spaces', () => {
  test('Add new space', async () => {
    const space = await Spaces.addSpace({ title: 'my_space' });
    expect(space.status)
      .toEqual(200);
  });
  test('Add empty title', async () => {
    const emptyspace = await Spaces.addSpace({ title:'' });
    expect(emptyspace.status)
      .toEqual(400);
  });
  test('Get added space', async () => {
    const space = await Spaces.addSpace({ title: 'Get_this_space' });
    const spaceId = space.data.id;
    const showspace = await Spaces.getSpace(spaceId);
    expect(showspace.data.id).toEqual(spaceId);
    expect(showspace.data.title).toEqual('Get_this_space');
    expect(showspace.data.entity_type).toEqual('space');
    expect(showspace.data.archived).toEqual(false);
  });
  test('Get all spaces', async () => {
    const space = await Spaces.getSpaces();
    let countspace = 0;
    const spacesall = space.data;
    for (const key in spacesall) {
      countspace = countspace + 1;
    }
    expect(countspace).toBeGreaterThan(0);
  });
  test('Update space', async () => {
    const space = await Spaces.addSpace({ title: 'updated_space' });
    const spaceupId = space.data.id;
    const updSpace = await Spaces.update(spaceupId, { external_id: 899 });
    const showspace = await Spaces.getSpace(spaceupId);
    expect(showspace.data.external_id).toEqual("899");
  });
  test('Remove added space', async () => {
    const space = await Spaces.addSpace({ title: 'Remove this Space' });
    const spacedelId = space.data.id;
    const removesp = await Spaces.removeSpace(spacedelId);
    expect(removesp.status).toEqual(200);
  });
  test('Remove space and check it', async () => {
    const space = await Spaces.addSpace({ title: 'Remove this Space' });
    const spacedelId = space.data.id;
    const removesp = await Spaces.removeSpace(spacedelId);
    const getremovedspace = await Spaces.getSpace(removesp);
    expect(getremovedspace.status).toEqual(404);
  });
  test('Remove non-existent space', async () => {
    const removesp = await Spaces.removeSpace(2211);
    expect(removesp.status).toEqual(403);
  });
});

describe('Tests for boards', () => {
  test('Add new board', async () => {
    const space = await Spaces.addSpace({ title: 'new_space' });
    const spaceId = space.data.id;
    const board = await Spaces.addBoard(spaceId, { title: 'new_board', columns: [], lanes: [] });
    expect(board.status)
      .toEqual(200);
  });
  test('Get board', async () => {
    const space = await Spaces.addSpace({ title: 'new_space' });
    const spaceId = space.data.id;
    const board = await Spaces.addBoard(spaceId, { title: 'deleted_board', columns: [], lanes: [] });
    const boardId = board.data.id;
    const getboard = await Spaces.getBoard(spaceId, boardId);
    expect(getboard.status)
      .toEqual(200);
    expect(getboard.data.title)
      .toEqual('deleted_board');
  });
  test('Delete board', async () => {
    const space = await Spaces.addSpace({ title: 'new_space' });
    const spaceId = space.data.id;
    const board = await Spaces.addBoard(spaceId, { title: 'deleted_board', columns: [], lanes: [] });
    const boardId = board.data.id;
    const delboard = await Spaces.deleteBoard(spaceId, boardId);
    expect(delboard.status)
      .toEqual(200);
  });
});
