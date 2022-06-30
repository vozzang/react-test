import styled from '@emotion/styled';
import { MediaQuery } from '../../shared/theme';

export const StyledHomeAbout = styled.section`
  .section-title {
    display: flex;
    align-items: center;
  }
  .pdf-down {
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin-left: 1rem;
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px 10px;
    font-weight: normal;

    span {
      margin-left: 5px;
    }
  }

  .about-content {
    display: flex;

    .thumb {
      width: 120px;
      height: 120px;
      margin-right: 50px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .content {
      position: relative;
      flex: 1;
      display: flex;
      justify-content: space-between;
      padding: 30px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 12px;

      &::before {
        content: "";
        position: absolute;
        top: 50px;
        left: -12px;
        width: 0;
        height: 0;
        border-right: 12px solid rgba(0, 0, 0, 0.2);
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
      }
      .text {
        flex: 1;
        padding-right: 30px;
        line-height: 28px;
        word-break: keep-all;
      }
      .bars {
        width: 40%;

        .bar-row {
          margin-bottom: 25px;

          &:last-child {
            margin-bottom: 0;
          }
        }
        .title {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          h3 {
            font-size: 16px;
          }
        }
        .bar {
          height: 8px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.2);

          div {
            height: 8px;
            border-radius: 8px;
          }

          &.bar-warning {
            div {
              background-color: $warning;
            }
          }
          &.bar-danger {
            div {
              background-color: $danger;
            }
          }
        }
      }
    }
  }
  .about-fun-facts {
    display: flex;
    margin-top: 30px;

    .item {
      display: flex;
      flex: 1 0 0px;

      .detail {
        flex: 1;
        padding-left: 20px;
      }
      .number {
        font-size: 32px;
        font-weight: 700;
      }
      .title {
        opacity: 0.5;
      }
    }
    i {
      display: block;
      width: 60px;
      height: 60px;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .clock {
      background-image: url("data:image/svg+xml,%3Csvg height='21' viewBox='0 0 21 21' width='21' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' transform='matrix(-1 0 0 1 20 2)'%3E%3Cpath d='m8.5 2.56534572h2c3.3137085 0 6 2.6862915 6 6v1.93465428c0 3.3137085-2.6862915 6-6 6h-2c-3.3137085 0-6-2.6862915-6-6v-1.93465428c0-3.3137085 2.6862915-6 6-6z'/%3E%3Cpath d='m3.94265851-.12029102c-1.05323083.28505997-1.86575682 1.17688618-1.86575682 2.30840383 0 1.16606183.73081563 2.21070886 1.78973019 2.50733508' transform='matrix(.62932039 .77714596 -.77714596 .62932039 2.893856 -1.491094)'/%3E%3Cpath d='m16.9295345-.10708618c-1.0898445.26224883-1.9419712 1.17003523-1.9419712 2.3284815 0 1.16644061.7312905 2.21138754 1.7907622 2.50762392' transform='matrix(-.62932039 .77714596 .77714596 .62932039 24.205765 -11.545558)'/%3E%3Cpath d='m9.5 5.5v4h-3.5'/%3E%3Cpath d='m15 15 2 2'/%3E%3Cpath d='m2 15 2 2' transform='matrix(-1 0 0 1 6 0)'/%3E%3C/g%3E%3C/svg%3E");
      background-size: 50px auto;
    }
    .coffee {
      background-image: url("data:image/svg+xml,%3Csvg height='21' viewBox='0 0 21 21' width='21' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' transform='translate(4 2)'%3E%3Cpath d='m2.5 6.5h6c1.1045695 0 2 .8954305 2 2v2.5c0 2.4852814-2.01471863 4.5-4.5 4.5h-1c-2.48528137 0-4.5-2.0147186-4.5-4.5v-2.5c0-1.1045695.8954305-2 2-2zm8 2h1c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2h-1'/%3E%3Cpath d='m4.5 4.5v-4'/%3E%3Cpath d='m6.5 4.5v-2'/%3E%3C/g%3E%3C/svg%3E");
      background-size: 60px auto;
    }
    .page {
      background-image: url("data:image/svg+xml,%3Csvg height='21' viewBox='0 0 21 21' width='21' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' transform='translate(4 3)'%3E%3Cpath d='m12.5 12.5v-7l-5-5h-5c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2z'/%3E%3Cpath d='m2.5 7.5h5'/%3E%3Cpath d='m2.5 9.5h7'/%3E%3Cpath d='m2.5 11.5h3'/%3E%3Cpath d='m7.5.5v3c0 1.1045695.8954305 2 2 2h3'/%3E%3C/g%3E%3C/svg%3E");
      background-size: 52px auto;
    }
    .phone {
      background-image: url("data:image/svg+xml,%3Csvg height='21' viewBox='0 0 21 21' width='21' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect height='14' rx='2' width='10' x='5.5' y='3.5'/%3E%3Cpath d='m8.5 15.5h4'/%3E%3C/g%3E%3C/svg%3E");
      background-size: 55px auto;
    }
  }

  ${MediaQuery.medium} {
    .pdf-down {
      display: none;
    }

    .about-content {
      flex-direction: column;

      .thumb {
        margin: 0 auto 20px auto;
      }
      .content {
        flex-direction: column;
        padding: 20px;

        &::before {
          content: "";
          position: absolute;
          top: -12px;
          left: calc(50% - 12px);
          width: 0;
          height: 0;
          border-top: 0;
          border-right: 10px solid transparent;
          border-left: 10px solid transparent;
          border-bottom: 12px solid rgba(0, 0, 0, 0.2);
        }
        .text {
          width: 100%;
          padding-right: 0;
          margin-bottom: 30px;
        }
        .bars {
          width: 100%;
        }
      }
    }
    .about-fun-facts {
      flex-wrap: wrap;

      .item {
        margin-bottom: 20px;

        .detail {
          padding-left: 15px;
        }
        .number {
          font-size: 28px;
        }
      }
      i {
        width: 40px;
        height: 40px;
      }
      .clock {
        background-size: 32px auto;
      }
      .coffee {
        background-size: 40px auto;
      }
      .page {
        background-size: 35px auto;
      }
      .phone {
        background-size: 37px auto;
      }
    }
  }

  @media print {
    .pdf-down {
      display: none;
    }
  }
`;