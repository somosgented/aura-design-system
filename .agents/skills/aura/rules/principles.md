# Product principles

These constrain product and UX choices. Visual tokens stay in `DESIGN.md` and the other files in this folder.

## Accessibility

Products must be usable by any user. Build for perception and operability.

**Incorrect:** an icon-only button with no accessible name, or a control that only works with a pointer.

**Correct:** a visible label or `aria-label`, a focus ring, and keyboard operation.

## Consistency

Teams share one objective and one voice with the user, visual and written.

**Incorrect:** one screen says “Delete”, the next says “Remove forever”, with a different button variant.

**Correct:** the same verb, the same variant, and the same confirmation pattern.

## Reusable

An hour spent on a component should prevent someone else from rebuilding it.

**Incorrect:** a second date field with its own markup because the first one was hard to call.

**Correct:** one field component, called twice.

## Shareable

Build with tools that let the team share the work.

**Incorrect:** a local-only snippet that never lands in the registry or the story.

**Correct:** a registry component and a story the next person can install.

## User control

The user must feel in control of the product.

**Incorrect:** a flow that submits on a timer or hides the way back.

**Correct:** an explicit submit and a way to leave.

## Forgiveness

The user must be able to change their mind or repeat a process.

**Incorrect:** a destructive action with no undo and no way to start again.

**Correct:** confirm, then undo or a clear retry.

## Perception of stability

Even on complex platforms, processes should feel simple and familiar.

**Incorrect:** a new layout and a new vocabulary on every step of one task.

**Correct:** the same shell, the same terms, one decision at a time.
